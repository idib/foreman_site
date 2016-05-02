ActiveAdmin.register Picture do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

  permit_params :work_id, :picture

  index do
    column :picture_file_name
    column :work
    column :created_at
    actions
  end

  form do |f|
    f.inputs "Picture Details" do
      f.input :work
      f.input :picture, as: :file
    end
    f.actions
  end

end
