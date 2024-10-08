import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube5Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.551 9.266v3.182a.3.3 0 0 1-.15.26l-2.878 1.663a.3.3 0 0 1-.45-.26v-3.158a.3.3 0 0 1 .15-.26l2.946-1.692c.167-.096.376-.009.381.184zM20.101 14.191a.3.3 0 0 1 .45.26v2.18c0 .79-.407 1.49-1.084 1.886l-1.945 1.12a.3.3 0 0 1-.45-.26v-3.262a.3.3 0 0 1 .15-.26zM15.493 16.857a.3.3 0 0 1 .45.26v3.26a.3.3 0 0 1-.15.26L13.085 22.2q-.062.035-.123.065c-.176.087-.363-.055-.363-.252v-3.31a.3.3 0 0 1 .15-.26zM15.493 11.695a.3.3 0 0 1 .45.26v3.159a.3.3 0 0 1-.15.26l-2.744 1.585a.3.3 0 0 1-.45-.26V13.54a.3.3 0 0 1 .15-.26zM11.32 13.28a.3.3 0 0 1 .15.26v3.172a.3.3 0 0 1-.45.26l-2.8-1.6a.3.3 0 0 1-.15-.26v-3.191a.3.3 0 0 1 .45-.26zM11.318 18.431a.3.3 0 0 1 .152.261v3.365c0 .186-.17.326-.341.25a2 2 0 0 1-.213-.108L8.22 20.648a.3.3 0 0 1-.15-.26v-3.287a.3.3 0 0 1 .448-.26zM6.788 15.856a.3.3 0 0 1 .152.26v3.271a.3.3 0 0 1-.45.26l-1.956-1.13a2.16 2.16 0 0 1-1.085-1.886v-2.152a.3.3 0 0 1 .448-.26zM6.79 10.659a.3.3 0 0 1 .15.26v3.207a.3.3 0 0 1-.449.261l-2.89-1.646a.3.3 0 0 1-.152-.26V9.265q0-.06.003-.118c.013-.195.23-.284.398-.187zM10.425 7.559a.3.3 0 0 1-.003.519l-2.78 1.599a.3.3 0 0 1-.3 0L4.384 7.962c-.166-.096-.201-.325-.048-.441a2 2 0 0 1 .199-.131l2.673-1.54a.3.3 0 0 1 .301 0zM15.086 4.86a.3.3 0 0 1 0 .52l-2.935 1.698a.3.3 0 0 1-.302-.001L8.942 5.369a.3.3 0 0 1 .002-.518l1.972-1.143A2.2 2.2 0 0 1 12 3.414c.373 0 .746.102 1.085.294zM19.713 7.559c.147.117.11.337-.053.43L16.658 9.71a.3.3 0 0 1-.3-.001L13.575 8.08a.3.3 0 0 1 .002-.52l2.95-1.699a.3.3 0 0 1 .3 0l2.64 1.529q.127.075.244.168M14.933 10.191a.3.3 0 0 1-.002.519l-2.747 1.587a.3.3 0 0 1-.3 0l-2.81-1.619a.3.3 0 0 1 0-.52l2.775-1.596a.3.3 0 0 1 .301 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCube5Bold;
