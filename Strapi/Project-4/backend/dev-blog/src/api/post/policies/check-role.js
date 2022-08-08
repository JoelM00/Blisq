'use strict';

/**
 * `check-role` policy.
 */

module.exports = (policyContext, config, { strapi }) => {
  console.log(strapi)
  const { userRole } = config
  const isEligible = 
  policyContext.state.user &&
  policyContext.this.state.user.role.code == userRole//Administrator

  if (isEligible) {
    return true;
  }

  return false;
};
