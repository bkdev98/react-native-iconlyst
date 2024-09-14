import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUserOutline = ({
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
      d="M10.003 4.75a3.245 3.245 0 1 0 0 6.49 3.245 3.245 0 0 0 0-6.49M5.257 7.996a4.745 4.745 0 1 1 9.49 0 4.745 4.745 0 0 1-9.49 0M5.373 14.674c1.262-.423 2.928-.549 4.632-.549 1.713 0 3.38.13 4.64.56.635.215 1.222.524 1.657.98.451.474.707 1.074.707 1.781 0 .709-.258 1.309-.713 1.78-.437.454-1.025.76-1.66.973-1.263.424-2.929.55-4.631.55-1.714 0-3.38-.13-4.641-.56-.635-.215-1.222-.524-1.656-.98A2.51 2.51 0 0 1 3 17.428a2.5 2.5 0 0 1 .712-1.78c.437-.454 1.026-.76 1.661-.974m-.58 2.014c-.19.198-.293.427-.293.74 0 .314.102.546.293.746.208.218.549.424 1.054.596 1.018.346 2.479.48 4.158.48 1.67 0 3.132-.13 4.153-.473.507-.17.85-.375 1.058-.591.191-.198.293-.428.293-.74 0-.314-.102-.546-.293-.746-.208-.218-.548-.424-1.053-.595-1.018-.346-2.48-.48-4.158-.48-1.672 0-3.134.13-4.155.471-.507.17-.849.375-1.057.591M18.796 7.816a.75.75 0 0 1 .75.75v1.46h1.505a.75.75 0 0 1 0 1.5h-1.505v1.46a.75.75 0 0 1-1.5 0v-1.46h-1.503a.75.75 0 0 1 0-1.5h1.503v-1.46a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAddUserOutline;
