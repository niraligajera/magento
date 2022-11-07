<?php

namespace Simi\SimiStripeIntegrationGraphQl\Override;

use Magento\Framework\Exception\CouldNotSaveException;

class Generic extends \StripeIntegration\Payments\Helper\Generic
{
    public function dieWithError($msg, $e = null)
    {
        $this->logError($msg);

        if ($e) { // && this->shouldLogExceptionTrace($e) */ ) {
            if ($e->getMessage() != $msg)
                $this->logError($e->getMessage());
            //var_dump($e->getTraceAsString());die;
            $this->logError($e->getTraceAsString());
        }

        if ($this->isAdmin()) {
            throw new CouldNotSaveException(__($msg));
        } else if ($this->isAPIRequest()) {
            // cody simi override cause CouldNotSaveException would not return message to client
            // and if not exit here,the payment info would be cleaned after placing order failure, even when it's just we
            // return payment 3ds code eg. Authentication Required: pi_3LH4p0Kv3tycFh9x0pM6ciir_secret_TZGkvKKSdoV4gVHmQ1lWogWgK
            $cleanErr = $this->cleanError($msg);
            if (strpos($cleanErr, 'Authentication Required:') !== false) {
                $returnedObj = [
                    "errors" => [
                        [
                            "debugMessage" => $cleanErr,
                            "message" => "Internal server error",
                            "extensions" => [
                                "category" => "internal",
                                "simireturned" => true
                            ],
                            "path" => [
                                "placeOrder"
                            ]
                        ]
                    ],
                    "data" =>  [
                        "placeOrder" => null
                    ]
                ];
                header('Content-Type: application/json');
                echo json_encode($returnedObj);
                exit();
            }
            throw new \Exception(__($this->cleanError($msg)));
        } else if ($this->isMultiShipping()) {
            throw new \Magento\Framework\Exception\LocalizedException(__($msg), $e);
        } else {
            $error = $this->cleanError($msg);
            throw new \Exception($error);
        }
    }
}
