import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneLike2Bold = ({
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
      d="M13.63 10.404a.84.84 0 0 0-.756.126.75.75 0 0 1-.9 0 .83.83 0 0 0-.757-.127c-.531.17-.653.776-.5 1.26.217.676.974 1.334 1.542 1.735.098.07.23.07.328 0 .577-.406 1.331-1.062 1.54-1.731.156-.487.034-1.092-.496-1.263"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.786 15.049a.75.75 0 0 1-.722 0c-.227-.123-2.24-1.26-2.775-2.928v-.002c-.434-1.358.21-2.738 1.466-3.142a2.3 2.3 0 0 1 1.544.037c.08.031.17.031.25 0a2.3 2.3 0 0 1 1.545-.036c1.253.404 1.897 1.784 1.464 3.14-.515 1.647-2.543 2.804-2.772 2.93M5.31 16.352a.3.3 0 0 0 .3.3h13.733a.3.3 0 0 0 .3-.3V7.65a.3.3 0 0 0-.3-.3H5.61a.3.3 0 0 0-.3.3zM5.735 18.15a.284.284 0 0 0-.283.347c.44 1.836 1.896 3.003 3.9 3.003h6.247c2.006 0 3.463-1.167 3.903-3.003a.284.284 0 0 0-.283-.347zM19.219 5.85a.284.284 0 0 0 .283-.346c-.44-1.837-1.897-3.004-3.901-3.004H9.353c-2.005 0-3.461 1.167-3.902 3.004a.284.284 0 0 0 .284.346z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneLike2Bold;
