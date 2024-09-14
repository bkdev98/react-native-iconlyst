import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonHailOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.589 8.231c.766-1 1.987-1.794 3.731-1.794 1.76 0 2.986.808 3.752 1.82.552.73.868 1.568.994 2.293.847.129 1.626.487 2.236 1.068.776.741 1.226 1.797 1.226 3.059a.75.75 0 0 1-1.5 0c0-.89-.309-1.54-.762-1.973-.46-.44-1.119-.701-1.894-.708a.75.75 0 0 1-.743-.75c0-.519-.215-1.374-.753-2.084-.515-.68-1.318-1.225-2.556-1.225-1.22 0-2.016.529-2.53 1.194l-.309.443a.75.75 0 1 1-1.232-.855l.319-.459z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.654 9.627c.517-.683 1.35-1.23 2.53-1.23s2.012.547 2.53 1.23c.494.653.707 1.435.707 2.007a.75.75 0 1 1-1.5 0c0-.257-.113-.718-.403-1.101-.267-.353-.677-.636-1.334-.636s-1.067.283-1.334.636c-.29.383-.403.844-.403 1.101a.75.75 0 0 1-.743.75c-.41.004-.74.142-.962.354-.216.205-.378.525-.378.998 0 .547.326 1.02.796 1.233a.75.75 0 1 1-.618 1.367 2.85 2.85 0 0 1-1.678-2.6c0-.845.304-1.57.842-2.084a2.77 2.77 0 0 1 1.326-.694 3.6 3.6 0 0 1 .622-1.33M7.536 5.813c-.773 0-1.409.59-1.48 1.343a.75.75 0 1 1-1.494-.143 2.987 2.987 0 0 1 5.96.288.75.75 0 0 1-1.5 0c0-.822-.665-1.488-1.486-1.488"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.788 7.773a.424.424 0 0 0-.424.424.75.75 0 0 1-1.5 0 1.923 1.923 0 0 1 3.728-.668.75.75 0 1 1-1.407.521.42.42 0 0 0-.397-.277M12.105 19.442a.75.75 0 0 1 .87.606l.009.049a.75.75 0 1 1-1.476.265l-.01-.05a.75.75 0 0 1 .607-.87M7.477 20.83a.75.75 0 0 0 .75 0l1.288-.744a.75.75 0 0 0 .375-.65V17.95a.75.75 0 0 0-.375-.65l-1.288-.743a.75.75 0 0 0-.75 0l-1.288.744a.75.75 0 0 0-.375.65v1.486a.75.75 0 0 0 .375.65zm-.163-1.826v-.62l.538-.311.538.31v.62l-.538.311zM16.247 20.83a.75.75 0 0 0 .75 0l1.288-.744a.75.75 0 0 0 .375-.65V17.95a.75.75 0 0 0-.375-.65l-1.288-.743a.75.75 0 0 0-.75 0l-1.287.744a.75.75 0 0 0-.375.65v1.486a.75.75 0 0 0 .375.65zm-.162-1.826v-.62l.537-.311.538.31v.62l-.538.311zM11.862 17.657a.75.75 0 0 0 .75 0l1.287-.744a.75.75 0 0 0 .375-.649v-1.487a.75.75 0 0 0-.375-.65l-1.287-.743a.75.75 0 0 0-.75 0l-1.288.744a.75.75 0 0 0-.375.65v1.486a.75.75 0 0 0 .375.65zm-.163-1.826v-.62l.538-.311.537.31v.62l-.537.311zM17.753 3.047c.4.11.634.522.525.922l-.005.02a.75.75 0 0 1-1.447-.397l.005-.02a.75.75 0 0 1 .922-.525m-4.964.632a.75.75 0 0 1 1.023.28l.009.015a.75.75 0 1 1-1.304.743l-.008-.015a.75.75 0 0 1 .28-1.023m8.934 2.43a.75.75 0 0 1-.28 1.023l-.037.02a.75.75 0 0 1-.742-1.303l.036-.02a.75.75 0 0 1 1.023.28m-.858 4.582a.75.75 0 0 1 .921-.526l.027.008a.75.75 0 0 1-.397 1.447l-.026-.008a.75.75 0 0 1-.525-.921M16.02 6.672c-.972 0-1.824.516-2.296 1.292a.75.75 0 1 1-1.281-.78 4.183 4.183 0 1 1 5.91 5.644.75.75 0 0 1-.838-1.244 2.683 2.683 0 0 0-1.495-4.912"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoonHailOutline;