/*
 * eiam-common - Employee Identity and Access Management Program
 * Copyright © 2020-2022 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package cn.topiam.employee.common.enums.app.converter;

import java.util.Objects;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

import cn.topiam.employee.common.enums.app.SamlAttributeStatementValueType;

/**
 * Saml 2 AttributeStatementValue 类型
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2022/5/22 23:26
 */
@Converter(autoApply = true)
public class SamlAttributeStatementValueTypeConverter implements
                                                      AttributeConverter<SamlAttributeStatementValueType, String> {
    @Override
    public String convertToDatabaseColumn(SamlAttributeStatementValueType attribute) {
        if (!Objects.isNull(attribute)) {
            return attribute.getCode();
        }
        return null;
    }

    @Override
    public SamlAttributeStatementValueType convertToEntityAttribute(String dbData) {
        return SamlAttributeStatementValueType.getType(dbData);
    }
}
