import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardKeyOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.77 4.663c.843-.904 2.04-1.406 3.445-1.406h10.07c1.408 0 2.606.501 3.448 1.406C21.57 5.562 22 6.797 22 8.173v3.294a.75.75 0 0 1-1.5 0V8.173c0-1.066-.33-1.914-.864-2.488-.53-.568-1.313-.928-2.351-.928H7.215c-1.033 0-1.818.36-2.348.929C4.332 6.26 4 7.108 4 8.173v6.587c0 1.066.33 1.914.865 2.489.529.568 1.313.929 2.35.929h2.942a.75.75 0 0 1 0 1.5H7.215c-1.407 0-2.606-.502-3.448-1.407-.837-.9-1.267-2.135-1.267-3.511V8.173c0-1.377.432-2.612 1.27-3.51"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 9.304a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M14.038 13.974a.75.75 0 0 1 1.061 0l.01.01a.75.75 0 0 1-1.06 1.06l-.01-.01a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.975 12.542a2.386 2.386 0 0 1 2.385 2.385c0 .16-.022.323-.063.508a.75.75 0 0 0 .203.691l2.74 2.74v1.208h-.993V19.7a.75.75 0 0 0-.75-.75h-.412v-.394a.75.75 0 0 0-.75-.75h-.44l-.426-.425a.75.75 0 0 0-.76-.183 2.39 2.39 0 0 1-3.12-2.27 2.386 2.386 0 0 1 2.386-2.386m2.772 7.908a1.13 1.13 0 0 0 1.131 1.124h1.73a1.13 1.13 0 0 0 1.132-1.13v-1.73c0-.3-.12-.587-.331-.8l-2.574-2.574a3 3 0 0 0 .025-.413 3.886 3.886 0 1 0-3.15 3.816l.345.344c.141.14.331.22.53.22v.393c0 .414.336.75.75.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCardKeyOutline;
