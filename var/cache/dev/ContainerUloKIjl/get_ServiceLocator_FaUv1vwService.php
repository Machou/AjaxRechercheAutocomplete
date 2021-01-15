<?php

namespace ContainerUloKIjl;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_FaUv1vwService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.FaUv1vw' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.FaUv1vw'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'programRepository' => ['privates', 'App\\Repository\\ProgramRepository', 'getProgramRepositoryService', true],
        ], [
            'programRepository' => 'App\\Repository\\ProgramRepository',
        ]);
    }
}
