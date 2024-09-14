import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoStandOutline = ({
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
      d="M3.769 6.397c.734-.787 1.774-1.221 2.985-1.221h5.886c1.214 0 2.255.433 2.989 1.221.728.782 1.098 1.853 1.098 3.035v3.752c0 1.183-.37 2.253-1.098 3.036-.734.788-1.776 1.222-2.99 1.222H6.754c-1.214 0-2.255-.434-2.988-1.222-.728-.783-1.098-1.853-1.098-3.036V9.432c0-1.183.372-2.253 1.1-3.035M4.866 7.42c-.427.458-.698 1.14-.698 2.012v3.752c0 .873.27 1.556.696 2.014.42.451 1.047.744 1.89.744h5.885c.844 0 1.471-.293 1.892-.745.426-.457.696-1.14.696-2.013V9.432c0-.872-.27-1.555-.696-2.012-.42-.452-1.048-.744-1.891-.744H6.754c-.839 0-1.467.292-1.888.744M8.691 3a.75.75 0 0 1 .75-.75h4.196a.75.75 0 0 1 0 1.5H9.44a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.53 15.941a.75.75 0 0 1 .607.309l3.074 4.224a.75.75 0 0 1-1.212.883l-2.468-3.391L8 21.442a.75.75 0 0 1-1.213-.883l3.136-4.309a.75.75 0 0 1 .607-.309M11.076 9.36a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M19.62 15.576h-.005c-.431 0-.85-.151-1.182-.425l-2.94-2.415a.75.75 0 0 1 .952-1.159l2.94 2.415a.35.35 0 0 0 .234.084.37.37 0 0 0 .369-.367l.01-4.8a.368.368 0 0 0-.6-.285l-2.95 2.42a.75.75 0 0 1-.95-1.161l2.952-2.416a1.868 1.868 0 0 1 3.053 1.451l-.011 4.793a1.87 1.87 0 0 1-1.867 1.865z"
    />
  </Svg>
);
export default IconlystVideoStandOutline;
