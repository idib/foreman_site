ActiveAdmin.register Image do

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

  permit_params :title, :text, :image

  index do
    column :title
    column :text
    column :image_file_name
    column :created_at
    actions
  end

  form do |f|
    f.inputs "Image Details" do
      f.input :title
      f.input :text
      f.input :image, as: :file
    end
    f.actions
  end


end
