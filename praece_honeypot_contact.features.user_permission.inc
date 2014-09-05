<?php
/**
 * @file
 * praece_honeypot_contact.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function praece_honeypot_contact_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'create contact content'.
  $permissions['create contact content'] = array(
    'name' => 'create contact content',
    'roles' => array(
      'anonymous user' => 'anonymous user',
      'authenticated user' => 'authenticated user',
    ),
    'module' => 'node',
  );

  return $permissions;
}
