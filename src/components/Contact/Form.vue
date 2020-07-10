<template>
  <form action class="reveal-content">
    <div class="col-md-7">
      <div class="form-group">
        <input type="email" class="form-control" id="email" name="_replyto" placeholder="Email" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="subject" name="message" placeholder="Subject" />
      </div>
      <div class="form-group">
        <textarea class="form-control" name="message" rows="5" placeholder="Enter your message"></textarea>
      </div>
      <button type="submit" class="btn btn-default btn-lg">Send</button>
    </div>
  </form>
</template>