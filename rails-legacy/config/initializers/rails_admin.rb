RailsAdmin.config do |config|

  ## == Cancan ==
  config.authorize_with :cancan
  config.current_user_method &:current_user

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end

  config.excluded_models = [AnswerAudio, PageInterview]

  config.model Page do
    list do
      field :name
      field :interviews
    end
    edit do
      field :name
      field :interviews
      field :description
      field :background_color
      field :background_image
    end
    show do
      field :name
      field :interviews
      field :description
      field :background_color
      field :background_image
    end
  end

  config.model Person do
    list do
      field :name
      field :email
    end
    edit do
      field :name
      field :last_name
      field :email
      field :phone
      field :website
      field :thumbnail
      field :twitter
      field :tribe_name
    end
    show do
      field :name
      field :last_name
      field :email
      field :phone
      field :website
      field :thumbnail
      field :twitter
      field :tribe_name
    end
  end

  config.model Tribe do
    list do
      field :name
    end
    edit do
      field :name
    end
    show do
      field :name
    end
  end

  config.model Group do
    list do
      field :name
    end
    edit do
      field :name
    end
    show do
      field :name
    end
  end

  config.model Interview do
    list do
      field :name
      field :person
      field :date_of_interview
    end
    edit do
      field :name
      field :person
      field :date_of_interview
    end
    show do
      field :name
      field :person
      field :date_of_interview
    end
  end

  config.model Question do
    parent Interview
    list do
      sort_by :question_order
      field :name
      field :question_order
    end
    edit do
      field :name
      field :question_order
    end
    show do
      field :name
      field :question_order
    end
  end

  config.model Answer do
    parent Question
    list do
      sort_by :question, :id
      field :answer
      field :question
      field :person
      field :group
    end
    edit do
      field :answer
      field :audios
      field :question
      field :person
      field :group
    end
    show do
      field :answer
      field :audios
      field :question
      field :person
      field :group
    end
  end


end
