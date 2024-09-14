import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTumblrTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.533 3.51c.031-.28.258-.51.54-.51h1.88c.282 0 .51.23.51.512v4.392l3.403.002c.283 0 .512.229.512.511v2.415a.51.51 0 0 1-.512.511l-3.404.002v3.835c0 1.13.917 2.046 2.047 2.046h1.479c.282 0 .511.229.511.511v2.75a.51.51 0 0 1-.51.512c-.84.001-2.505.002-3.298-.003-1.874.028-3.83-.969-4.372-2.858-.235-.673-.307-1.333-.307-2.045v-4.748H7.014a.51.51 0 0 1-.512-.511L6.5 8.749c0-.214.133-.405.333-.482.75-.289 1.43-.609 2.085-1.223.842-.849 1.475-2.266 1.615-3.534"
    />
  </Svg>
);
export default IconlystTumblrTwoTone;
