import React, { useEffect, useRef } from 'react';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

const AccountsUIWrapper = () => {

  const refTarget = useRef();
  useEffect(()=>{
    const view = Blaze.render(Template.loginButtons, refTarget.current);

    return () => {
      Blaze.remove(view);
    };
  });
  return (<span className="btn" ref={refTarget} />);
};

export default AccountsUIWrapper;