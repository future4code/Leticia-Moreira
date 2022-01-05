import React, { useState } from 'react';
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [curtido, setCurtido] = useState(false)
  const [setComentando] = useState(false)
  const [comentarios, setComentarios] = useState(false)

  const onClickCurtida = () => {
   if (curtido) {

   setCurtido({
     curtido: setCurtido,
     numeroCurtidas: setCurtido + 1})
        
  } else {

    setCurtido({
      curtido: setCurtido,
      numeroCurtidas: setCurtido - 1})
 
    }
  }


  const onClickComentario = () => {

    setComentando({
      comentando: setComentando
    })


  };

  const enviarComentario = (comentario) => {
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          // icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          // valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          // valorContador={numeroComentarios}
        />
      </PostFooter>
      {/* {caixaDeComentario} */}
    </PostContainer>
  )
}

export default Post