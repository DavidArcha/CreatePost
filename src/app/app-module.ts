import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { DisplayPost } from './components/display-post/display-post';
import { CreatePosts } from './components/create-posts/create-posts';

@NgModule({
  declarations: [App, DisplayPost, CreatePosts],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
