const API_URL = 'http://67.205.176.136:4000'

const API_CONST = {
    add_property: `${API_URL}/admin/property/add`,
    add_sub_property: `${API_URL}/admin/property/sub`,
    view_property: `${API_URL}/admin/property/info`,
    create_property_data: `${API_URL}/admin/property/saveProperty`,
    view_property_list: `${API_URL}/admin/property/viewProperty`,
    update_property_status: `${API_URL}/admin/property/changeStatus`,
    get_temp_property:`${API_URL}/tempProp/getAllProps`,
    add_temp_property:`${API_URL}/tempProp/addProperty`,
    get_prperty:`${API_URL}/category/list`,

    
}

export default API_CONST