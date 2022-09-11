import React from 'react'
import { FaLock } from 'react-icons/fa'

function UpdatePassword() {
  return (
    
    <form className="form p-4">

<div class="field">
<p class="control has-icons-left">
<input class="input is-large" type="password" placeholder="Ancien mot de passe"/>
<span class="icon is-small is-left">
<FaLock/>
</span>
</p>
</div>

<div class="field">
<p class="control has-icons-left">
<input class="input is-large" type="password" placeholder="Nouveau mot de passe"/>
<span class="icon is-small is-left">
<FaLock/>
</span>
</p>
</div>

<div class="field">
<p class="control has-icons-left">
<input class="input is-large" type="password" placeholder="Repeter le mot de passe"/>
<span class="icon is-small is-left">
<FaLock/>
</span>
</p>
</div>

<div class="field is-grouped mt-5">
<div class="control">
<button class="button is-large is-danger">Modifier</button>
</div>
<div class="control">
<button class="button is-large is-link is-light">Annuler</button>
</div>
</div>
</form>
  )
}

export default UpdatePassword