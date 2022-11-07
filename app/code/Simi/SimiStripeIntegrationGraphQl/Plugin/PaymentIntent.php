<?php

namespace Simi\SimiStripeIntegrationGraphQl\Plugin;

class PaymentIntent
{
    /* 
    --cody--
    save secret to quote because the 2nd time we place order with guest, the payment would create new secret and face the error:
    "The provided PaymentMethod was previously used with a PaymentIntent without Customer attachment,
    shared with a connected account without Customer attachment, or was detached from a Customer.
    It may not be used again. To use a PaymentMethod multiple times, you must attach it to a Customer first."
    */
    public function aroundLoadFromCache($subject, callable $proceed, $params, $quote, $order, $paymentIntentId = null)
    {
        $result = false;
        try {
            $result = $proceed($params, $quote, $order, $paymentIntentId);
        } catch (\Exception $e) {
        }
        if ($result && $quote) {
            $objectManager = \Magento\Framework\App\ObjectManager::getInstance();
            $quoteModel = $objectManager->create('Magento\Quote\Model\Quote')->load($quote->getId());
            if ($quoteModel->getId() == $quote->getId()) {
                if (!$quoteModel->getData('customer_id')) {
                    $quoteModel->setData('quote_stripe_secret', $subject->getPaymentIntentId())->save();
                }
            }
        }

        if (!$result) {
            $objectManager = \Magento\Framework\App\ObjectManager::getInstance();
            $quoteModel = $objectManager->create('Magento\Quote\Model\Quote')->load($quote->getId());
            if ($quoteModel->getId() == $quote->getId()) {
                //if (!$quoteModel->getData('customer_id')) {
                    $resultSaved = $quoteModel->getData('quote_stripe_secret');
                    if ($resultSaved) {
                        $subject->setPiId($resultSaved)->save();
                        $paymentIntent = $subject->loadPaymentIntent($resultSaved, $order);
                        return $subject->paymentIntent = $paymentIntent;
                    }
                //}
            }
        }
        return $result;
    }
}
