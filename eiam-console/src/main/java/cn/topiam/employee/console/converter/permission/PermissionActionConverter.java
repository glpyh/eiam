/*
 * eiam-console - Employee Identity and Access Management
 * Copyright © 2022-Present Jinan Yuanchuang Network Technology Co., Ltd. (support@topiam.cn)
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
package cn.topiam.employee.console.converter.permission;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.util.ObjectUtils;

import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Predicate;

import cn.topiam.employee.common.entity.permission.PermissionActionEntity;
import cn.topiam.employee.common.entity.permission.PermissionResourceEntity;
import cn.topiam.employee.common.entity.permission.QPermissionResourceEntity;
import cn.topiam.employee.common.enums.PermissionActionType;
import cn.topiam.employee.console.pojo.query.permission.PermissionActionListQuery;
import cn.topiam.employee.console.pojo.result.permission.PermissionActionListResult;

/**
 * 权限映射
 *
 * @author TopIAM
 * Created by support@topiam.cn on 2020/8/14 22:45
 */
@Mapper(componentModel = "spring")
public interface PermissionActionConverter {
    /**
     * 应用权限资源列表转分页
     *
     * @param query {@link PermissionActionListQuery}
     * @return {@link Predicate}
     */
    default Predicate permissionActionListQueryConvertToPredicate(PermissionActionListQuery query) {
        QPermissionResourceEntity resource = QPermissionResourceEntity.permissionResourceEntity;
        Predicate predicate = ExpressionUtils.and(resource.isNotNull(),
            resource.deleted.eq(Boolean.FALSE));
        //查询条件
        //@formatter:off
        // 资源名称
        predicate = StringUtils.isBlank(query.getName()) ? predicate : ExpressionUtils.and(predicate, resource.name.like("%" + query.getName() + "%"));
        // 资源ID
        predicate = ObjectUtils.isEmpty(query.getId()) ? predicate : ExpressionUtils.and(predicate, resource.id.eq(Long.valueOf(query.getId())));
        //应用ID
        predicate = ObjectUtils.isEmpty(query.getAppId()) ? predicate : ExpressionUtils.and(predicate, resource.appId.eq(Long.valueOf(query.getAppId())));
        //@formatter:on
        return predicate;
    }

    /**
     * 实体转资源权限结果返回
     *
     * @param list {@link PermissionResourceEntity}
     * @return {@link PermissionActionListResult}
     */
    default List<PermissionActionListResult> entityConvertToResourceActionListResult(List<PermissionResourceEntity> list) {
        List<PermissionActionListResult> results = new ArrayList<>();
        List<PermissionActionListResult.Action> menus = new ArrayList<>();
        List<PermissionActionListResult.Action> apis = new ArrayList<>();
        List<PermissionActionListResult.Action> buttons = new ArrayList<>();
        List<PermissionActionListResult.Action> others = new ArrayList<>();
        List<PermissionActionListResult.Action> datas = new ArrayList<>();
        for (PermissionResourceEntity resource : list) {
            for (PermissionActionEntity action : resource.getActions()) {
                if (PermissionActionType.MENU.equals(action.getType())) {
                    menus.add(actionConvertToResourceActionResult(action));
                }
                if (PermissionActionType.API.equals(action.getType())) {
                    apis.add(actionConvertToResourceActionResult(action));
                }
                if (PermissionActionType.DATA.equals(action.getType())) {
                    datas.add(actionConvertToResourceActionResult(action));
                }
                if (PermissionActionType.BUTTON.equals(action.getType())) {
                    buttons.add(actionConvertToResourceActionResult(action));
                }
                if (PermissionActionType.OTHER.equals(action.getType())) {
                    others.add(actionConvertToResourceActionResult(action));
                }
            }
            PermissionActionListResult result = new PermissionActionListResult();
            //基本信息
            result.setAppId(resource.getAppId().toString());
            result.setId(resource.getId().toString());
            result.setName(resource.getName());
            result.setEnabled(resource.getEnabled());
            result.setDesc(resource.getDesc());
            //权限资源
            result.setButtons(buttons);
            result.setApis(apis);
            result.setDatas(datas);
            result.setMenus(menus);
            result.setOthers(others);
            results.add(result);
        }
        return results;
    }

    /**
     * actionConvertToResourceActionResult
     *
     * @param action {@link PermissionActionEntity}
     * @return {@link PermissionActionListResult.Action}
     */
    @Mapping(target = "access", source = "value")
    PermissionActionListResult.Action actionConvertToResourceActionResult(PermissionActionEntity action);

}