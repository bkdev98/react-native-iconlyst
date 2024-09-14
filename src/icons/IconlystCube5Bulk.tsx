import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube5Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M20.551 8.545v3.182a.3.3 0 0 1-.15.26l-2.878 1.663a.3.3 0 0 1-.45-.26v-3.158a.3.3 0 0 1 .15-.26l2.946-1.692c.167-.096.376-.009.381.183zM20.101 13.47a.3.3 0 0 1 .45.26v2.18c0 .79-.407 1.49-1.084 1.886l-1.945 1.12a.3.3 0 0 1-.45-.261v-3.261a.3.3 0 0 1 .15-.26zM15.493 16.136a.3.3 0 0 1 .45.26v3.26a.3.3 0 0 1-.15.26l-2.708 1.563q-.062.035-.123.065c-.176.087-.363-.055-.363-.252v-3.311a.3.3 0 0 1 .15-.26zM15.493 10.974a.3.3 0 0 1 .45.26v3.159a.3.3 0 0 1-.15.26l-2.744 1.585a.3.3 0 0 1-.45-.26v-3.16a.3.3 0 0 1 .15-.259zM11.32 12.558a.3.3 0 0 1 .15.26v3.173a.3.3 0 0 1-.45.26l-2.8-1.6a.3.3 0 0 1-.15-.26V11.2a.3.3 0 0 1 .45-.26zM11.318 17.71a.3.3 0 0 1 .152.26v3.366c0 .186-.17.326-.341.25a2 2 0 0 1-.213-.108L8.22 19.927a.3.3 0 0 1-.15-.26V16.38a.3.3 0 0 1 .448-.261zM6.788 15.135a.3.3 0 0 1 .152.26v3.271a.3.3 0 0 1-.45.26l-1.956-1.13a2.16 2.16 0 0 1-1.085-1.886v-2.152a.3.3 0 0 1 .448-.26zM6.79 9.938a.3.3 0 0 1 .15.26v3.207a.3.3 0 0 1-.449.261l-2.89-1.646a.3.3 0 0 1-.152-.261V8.544l.003-.117c.013-.195.23-.285.398-.187z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.424 6.838a.3.3 0 0 1-.002.519l-2.78 1.599a.3.3 0 0 1-.3 0L4.384 7.241c-.166-.096-.201-.325-.048-.441q.094-.072.199-.13l2.673-1.54a.3.3 0 0 1 .301 0zM15.086 4.14a.3.3 0 0 1 0 .52l-2.935 1.697a.3.3 0 0 1-.302-.001L8.942 4.649a.3.3 0 0 1 .002-.519l1.972-1.143A2.2 2.2 0 0 1 12 2.693c.373 0 .746.102 1.085.294zM19.713 6.838c.147.117.11.337-.053.43L16.658 8.99a.3.3 0 0 1-.3 0l-2.782-1.63a.3.3 0 0 1 .002-.518l2.95-1.7a.3.3 0 0 1 .3 0l2.64 1.529q.127.076.244.168M14.933 9.47a.3.3 0 0 1-.002.52l-2.747 1.586a.3.3 0 0 1-.3 0l-2.81-1.619a.3.3 0 0 1 0-.52l2.775-1.596a.3.3 0 0 1 .301.001z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCube5Bulk;
