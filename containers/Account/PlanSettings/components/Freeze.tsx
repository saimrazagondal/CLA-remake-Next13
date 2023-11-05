import { useState, useContext } from 'react';
import { Spin, message } from 'antd';
import { SubSectionHeading } from '../../styles/planSettings.styles';
import confirmDialog from '@/components/ConfirmDialog';
import Toggle from '@/components/Toggle';
import { PLAN_SETTINGS } from '../constants';
import { AccountStateContext } from '@/context';
import { ActionTypes } from '../../state';
// import axios, { baseUrl } from '../../../utils/axios';

const Freeze: React.FC = () => {
  const {
    state: {
      planSettings: { freeze: active },
    },
    dispatch,
  } = useContext(AccountStateContext);

  const [loading, setLoading] = useState(false);

  const toggleAccountFreeze = async () => {
    setLoading(true);
    try {
      //   await axios.put(`${baseUrl('entities')}/tenants`, {
      //     tenantId,
      //     freezeAccount: !active,
      //   });
      dispatch({ type: ActionTypes.TOGGLE_FREEZE_ACCOUNT });
      message.success('Success');
    } catch (err) {
      message.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <SubSectionHeading $mr='1rem' $mb='10px'>
        Freeze Account
      </SubSectionHeading>
      <Toggle
        value={active}
        onClick={() =>
          confirmDialog(
            !active
              ? PLAN_SETTINGS.CONFIRMATION.FREEZE
              : PLAN_SETTINGS.CONFIRMATION.UNFREEZE,
            toggleAccountFreeze
          )
        }
      />
    </Spin>
  );
};

export default Freeze;
