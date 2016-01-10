package controllers

import javax.inject.Inject

import play.api.mvc._
import play.api.i18n.{MessagesApi, I18nSupport}

@javax.inject.Inject
class Application @Inject()(val messagesApi: MessagesApi) extends Controller with I18nSupport {

  def index = Action { implicit request =>
    Ok(views.html.index())
  }
  
  def accommodation = Action { implicit request =>
    Ok(views.html.accommodation())
  }
  
  def orkla = Action { implicit request =>
    Ok(views.html.orkla()) 
  }

  def blog = Action { implicit request =>
    Ok(views.html.blog())
  }

  def zone1 = Action { implicit request =>
    Ok(views.html.zone1()) 
  }
  
  def zone2 = Action { implicit request =>
    Ok(views.html.zone2()) 
  }
  
  def zone3 = Action { implicit request =>
    Ok(views.html.zone3()) 
  }

  def about = Action { implicit request =>
    Ok(views.html.about())
  }
}