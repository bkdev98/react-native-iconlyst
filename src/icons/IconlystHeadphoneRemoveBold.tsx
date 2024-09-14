import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneRemoveBold = ({
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
      d="M3 20.207a.749.749 0 0 1-.53-1.28l1.463-1.463-.53-1.292a1 1 0 0 1-.027-.074 9.2 9.2 0 0 1-.425-2.76c0-5.183 4.217-9.4 9.4-9.4 1.434 0 2.856.332 4.144.964l1.642-1.642a.749.749 0 1 1 1.06 1.06L5.409 18.11a.7.7 0 0 1-.129.128l-1.75 1.75a.74.74 0 0 1-.53.22M15.362 6.035l-7.82 7.82a2.56 2.56 0 0 0-1.044-.563 2.53 2.53 0 0 0-1.947.256l-.096.057a8 8 0 0 1-.004-.267c0-4.356 3.544-7.9 7.9-7.9 1.032 0 2.057.205 3.01.597"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M6.44 20.784a2.533 2.533 0 0 0 2.195-.173 2.58 2.58 0 0 0 1.282-2.222c0-.332-.06-.645-.18-.929a.747.747 0 0 0-1.221-.241L6.18 19.554a.748.748 0 0 0 .26 1.23M17.353 20.96a2.564 2.564 0 0 1-2.213-3.84l1.521-2.637a2.54 2.54 0 0 1 1.553-1.193 2.53 2.53 0 0 1 1.942.255l.09.052q.003-.129.004-.257c0-1.631-.486-3.19-1.406-4.51a.75.75 0 0 1 1.23-.858 9.33 9.33 0 0 1 1.676 5.368c0 .894-.125 1.778-.372 2.63q-.015.064-.035.127c-.352 1.14-.951 2.353-1.781 3.603-.342.58-.888.996-1.541 1.171a2.6 2.6 0 0 1-.668.088"
    />
  </Svg>
);
export default IconlystHeadphoneRemoveBold;
