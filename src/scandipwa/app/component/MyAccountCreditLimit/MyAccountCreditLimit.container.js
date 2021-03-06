/**
 * @category  ScandiPWA
 * @package   ScandiPWA_CustomerCreditGraphQl
 * @author    Vitalijs Visnakovs <info@scandiweb.com>
 * @copyright Copyright (c) 2020 Scandiweb, Inc (https://scandiweb.com)
 * @license   http://opensource.org/licenses/OSL-3.0 The Open Software License 3.0 (OSL-3.0)
 */

import React from 'react';
import DataContainer from 'Util/Request/DataContainer';
import { fetchQuery } from 'Util/Request';
import MyAccountCreditLimit from './MyAccountCreditLimit.component';
import CustomerCreditQuery from '../../query/CustomerCredit.query';

/** @namespace ScandiPWA/CustomerCreditGraphQl/Component/MyAccountCreditLimit/Container */
export class MyAccountCreditLimitContainer extends DataContainer {
    state = {
        creditLimit: []
    };

    componentDidMount() {
        fetchQuery(CustomerCreditQuery.getCreditTransactionsQuery()).then(
            /** @namespace ScandiPWA/CustomerCreditGraphQl/Component/MyAccountCreditLimit/Container/fetchQueryThen */
            ({ creditLimit }) => this.setState({ creditLimit })
        );
    }

    render() {
        return (
            <MyAccountCreditLimit
              { ...this.state }
            />
        );
    }
}

export default MyAccountCreditLimitContainer;
