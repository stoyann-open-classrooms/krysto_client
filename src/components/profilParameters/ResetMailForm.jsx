import React from 'react'
import { FaCheck, FaLock } from 'react-icons/fa'

function ResetMailForm() {
  return (
    <div>
          <form className="form p-4">

<div class="field">
<p class="control has-icons-left has-icons-right">
<input class="input is-large" type="email" placeholder="Email"/>
<span class="icon is-small is-left">
<i class="fas fa-envelope"></i>
</span>
<span class="icon is-small is-right">
<FaCheck/>
</span>
</p>
</div>
<div class="field">
<p class="control has-icons-left">
<input class="input is-large" type="password" placeholder="Password"/>
<span class="icon is-small is-left">
<FaLock/>
</span>
</p>
<div class="field is-grouped mt-5">
<div class="control">
<button class="button is-large is-danger">Modifier</button>
</div>
<div class="control">
<button class="button is-large is-link is-light">Annuler</button>
</div>
</div>
</div>
</form>

    </div>
  )
}

export default ResetMailForm