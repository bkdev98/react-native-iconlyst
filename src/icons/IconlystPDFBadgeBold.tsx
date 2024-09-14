import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPDFBadgeBold = ({
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
      d="M6.449 10.309H5.72v1.772h.729a.887.887 0 0 0 0-1.772M11.653 10.305h-.474V13.7h.474a1.7 1.7 0 0 0 1.696-1.698c0-.454-.176-.88-.496-1.2a1.7 1.7 0 0 0-1.2-.497"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.03 10.305h-1.901v1.354h1.493a.75.75 0 0 1 0 1.5h-1.493v1.29a.75.75 0 0 1-1.5 0V9.556a.75.75 0 0 1 .75-.75h2.651a.75.75 0 0 1 0 1.5m-5.118 3.959a3.22 3.22 0 0 1-2.259.936h-1.224a.75.75 0 0 1-.75-.75V9.555a.75.75 0 0 1 .75-.75h1.224c.842 0 1.666.342 2.261.938.602.6.935 1.404.935 2.259a3.17 3.17 0 0 1-.937 2.262m-7.463-.683H5.72v.862a.75.75 0 0 1-1.5 0V9.559a.75.75 0 0 1 .75-.75h1.479a2.39 2.39 0 0 1 2.386 2.387 2.39 2.39 0 0 1-2.386 2.385m11.483-9.905H6.066C3.335 3.676 1.5 5.595 1.5 8.45v7.102c0 2.856 1.835 4.774 4.566 4.774h11.865c2.733 0 4.569-1.918 4.569-4.774V8.45c0-2.856-1.836-4.775-4.568-4.775"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPDFBadgeBold;
