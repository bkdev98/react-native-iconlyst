import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNpmCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.475 8.399a.335.335 0 0 0-.335.334v6.532c0 .185.15.335.335.335h2.483v-5.119c0-.714.578-1.292 1.292-1.292h1.406c.714 0 1.293.578 1.293 1.292v5.12h.912V8.732a.335.335 0 0 0-.335-.334zm-1.835.334C6.64 7.72 7.46 6.9 8.475 6.9h7.051c1.014 0 1.835.821 1.835 1.834v7.075c0 .714-.579 1.292-1.292 1.292H14.74a1.29 1.29 0 0 1-1.292-1.292v-5.12h-.992v5.12c0 .714-.578 1.292-1.292 1.292h-2.69a1.835 1.835 0 0 1-1.835-1.835z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNpmCircleOutline;
