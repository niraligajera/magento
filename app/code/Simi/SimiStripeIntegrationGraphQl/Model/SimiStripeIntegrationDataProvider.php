<?php

declare(strict_types=1);

namespace Simi\SimiStripeIntegrationGraphQl\Model;

use Magento\QuoteGraphQl\Model\Cart\Payment\AdditionalDataProviderInterface;
use Magento\Framework\Stdlib\ArrayManager;
use Magento\Framework\GraphQl\Exception\GraphQlInputException;

class SimiStripeIntegrationDataProvider implements AdditionalDataProviderInterface
{
    public function getData(array $data): array
    {
        $paymentData = $data;
        $additionalData = [];
        
        try {
            $objectManager = \Magento\Framework\App\ObjectManager::getInstance();
            $contents = $objectManager->get('\Magento\Framework\App\RequestInterface')->getContent();
            $contents_array = [];
            if ($contents && ($contents != '')) {
                $contents_paser = urldecode($contents);
                $contents = json_decode($contents_paser);
                $contents_array = json_decode($contents_paser, true);
            }
            if ($contents_array && isset($contents_array['variables']['cartId'])) {
                $quoteId = $objectManager->get('\Magento\Quote\Model\MaskedQuoteIdToQuoteIdInterface')->execute($contents_array['variables']['cartId']); 
                if ($quoteId) {
                    $quoteModel = $objectManager->create('Magento\Quote\Model\Quote')->load($quoteId);
                    if ($quoteModel->getId() == $quoteId) {
                        if ($quoteModel->getData('quote_stripe_secret')) {
                            $quoteModel->setData('quote_stripe_secret', null)->save();
                        }
                    }
                }
            }
        } catch (\Exception $e) {

        }
        if (isset($paymentData['simi_stripe_integration_cc_stripejs_token'])){
            $additionalData['cc_stripejs_token'] = $paymentData['simi_stripe_integration_cc_stripejs_token'];
            $additionalData['client_side_confirmation'] = false;
        }
        if (isset($paymentData['simi_stripe_integration_cc_saved']))
            $additionalData['cc_saved'] = $paymentData['simi_stripe_integration_cc_saved'];
        if (isset($paymentData['simi_stripe_integration_cc_save']))
            $additionalData['cc_save'] = $paymentData['simi_stripe_integration_cc_save'];
            
        return $additionalData;
    }
}
