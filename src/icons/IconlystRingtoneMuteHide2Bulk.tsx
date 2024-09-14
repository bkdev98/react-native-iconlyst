import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneMuteHide2Bulk = ({
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
      d="m19.744 3.649-15.22 15.22a.7.7 0 0 1-.53.22c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.27-1.26c-.54-.8-.65-1.84-.22-2.74l.47-1c.29-.63.45-1.34.45-2.04v-1.32c0-3.9 3.17-7.07 7.06-7.07 1.73 0 3.38.64 4.65 1.76l1.54-1.55c.3-.29.77-.29 1.06 0 .3.3.3.77 0 1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.044 17.789c0 1.29-1.05 2.34-2.34 2.34a2.32 2.32 0 0 1-2.31-2l-.01-.36h4.66zm5.44-3.98-.46-.99c-.3-.65-.46-1.34-.46-2.05v-1.03c0-.3-.02-1.665-.09-2.085a.5.5 0 0 0-.34-.39.51.51 0 0 0-.5.11s-9.497 9.314-9.59 9.425a.72.72 0 0 0-.17.49l.02.94c0 .01.01.03.01.04s-.01.02 0 .04c.24 1.89 1.88 3.32 3.8 3.32 2.12 0 3.84-1.72 3.84-3.84v-.02h1.43c.96 0 1.84-.49 2.35-1.3s.57-1.8.16-2.66"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRingtoneMuteHide2Bulk;
