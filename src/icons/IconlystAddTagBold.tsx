import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddTagBold = ({
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
      d="M7.174 7.451H7.17a.851.851 0 1 0-.029 1.703h.002A.86.86 0 0 0 8 8.318c.001-.469-.376-.865-.825-.867"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.5 8.325a2.354 2.354 0 0 1-2.356 2.329h-.006a2.33 2.33 0 0 1-1.66-.7 2.3 2.3 0 0 1-.682-1.65A2.345 2.345 0 0 1 7.17 5.95h.01c1.284.004 2.324 1.068 2.32 2.373m4.509 3.7a7.56 7.56 0 0 1 1.967-5.087q-1.412-1.412-2.825-2.825c-1.06-1.06-2.354-1.598-3.842-1.6H8.99c-3.331-.007-4.534.01-4.762.05-1.633.282-2.868 1.746-2.872 3.408l-.004.649c-.011 1.282-.031 3.669.04 4.432.112 1.228.62 2.305 1.51 3.2q3.086 3.1 6.184 6.184a3.54 3.54 0 0 0 2.51 1.055c.89 0 1.78-.344 2.473-1.031.893-.884 1.777-1.777 2.665-2.665a8 8 0 0 1-.543-.498c-1.42-1.432-2.196-3.304-2.184-5.272"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.909 11.256h-1.75V9.508a.75.75 0 0 0-1.5 0v1.748h-1.746a.75.75 0 0 0 0 1.5h1.747v1.748a.75.75 0 0 0 1.5 0v-1.748h1.749a.75.75 0 0 0 0-1.5M7.174 7.451H7.17a.851.851 0 1 0-.029 1.703h.002A.86.86 0 0 0 8 8.318c.001-.469-.376-.865-.825-.867"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.5 8.325a2.354 2.354 0 0 1-2.356 2.329h-.006a2.33 2.33 0 0 1-1.66-.7 2.3 2.3 0 0 1-.682-1.65A2.345 2.345 0 0 1 7.17 5.95h.01c1.284.004 2.324 1.068 2.32 2.373m4.509 3.7a7.56 7.56 0 0 1 1.967-5.087q-1.412-1.412-2.825-2.825c-1.06-1.06-2.354-1.598-3.842-1.6H8.99c-3.331-.007-4.534.01-4.762.05-1.633.282-2.868 1.746-2.872 3.408l-.004.649c-.011 1.282-.031 3.669.04 4.432.112 1.228.62 2.305 1.51 3.2q3.086 3.1 6.184 6.184a3.54 3.54 0 0 0 2.51 1.055c.89 0 1.78-.344 2.473-1.031.893-.884 1.777-1.777 2.665-2.665a8 8 0 0 1-.543-.498c-1.42-1.432-2.196-3.304-2.184-5.272"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.909 11.256h-1.75V9.508a.75.75 0 0 0-1.5 0v1.748h-1.746a.75.75 0 0 0 0 1.5h1.747v1.748a.75.75 0 0 0 1.5 0v-1.748h1.749a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAddTagBold;
