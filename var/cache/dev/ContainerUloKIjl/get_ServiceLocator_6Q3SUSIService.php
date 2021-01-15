<?php

namespace ContainerUloKIjl;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_6Q3SUSIService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.6Q3SUSI' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.6Q3SUSI'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'program' => ['privates', '.errored..service_locator.6Q3SUSI.App\\Entity\\Program', NULL, 'Cannot autowire service ".service_locator.6Q3SUSI": it references class "App\\Entity\\Program" but no such service exists.'],
        ], [
            'program' => 'App\\Entity\\Program',
        ]);
    }
}
