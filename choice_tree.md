cook -> Dietary Requirement?(dropdown (incl vegetarian) dflt:no) ->
  Main ingredient ->
    meat -> chicken OR seafood OR beef OR pork OR sausage OR lamb -> GOTO next                                        
    non meat -> GOTO next
      NEXT -> pasta, rice, potato, vegetable, cheese ->
        difficulty (scale 1-10)

If cook -> send all data in request for recipies, filter results by difficulty match, pick three at random.
        -> present one (user can dismiss) -> present two (user can dismiss) -> present three (user can dismiss)
        -> if none accepted by three then "Theres no helping you" -> present try again button

no cook -> utilise google places api, use location data provided to call to Zomato API for further data to make decision
        | dine in (meal_takeaway in places api) | ->
        |                                       |   under $30 | ->
        |                                       |             |    one or the other between top 5 ranked results until decision
        |                                       |   over $30  | ->
        | take out (restaurant in places api)   | ->
