import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGingerbreadBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.912 21.063A2.457 2.457 0 1 1 5.88 18.25L7.87 15.4a.993.993 0 0 0-.572-1.53l-1.646-.416a2.457 2.457 0 1 1 1.205-4.765l2.45.62M11.999 10.397a3.641 3.641 0 0 0 2.559-6.231M11.966 13.161v.01M11.966 15.736v.01M14.8 21.478l.215-1.506 1.507-.215.214-1.507 1.507-.214M18.576 13.332l-1.14-.894.541-1.344-.57-.446"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.356 13.332 1.14-.894-.54-1.344.57-.446M9.47 21.478l-.214-1.506-1.506-.215-.215-1.507-1.507-.214M11.334 7.967c.439.49 1.08.098 1.164 0M12.95 5.959h-.008M10.991 5.959h-.008M9.334 9.289c-.623-.654-.976-1.559-.976-2.533a3.64 3.64 0 0 1 3.64-3.641M15.998 14.285l2.35-.831a2.457 2.457 0 0 0-1.205-4.765l-2.479.6M12.95 19.04l1.41 2.023a2.457 2.457 0 1 0 4.031-2.812l-1.015-1.454"
    />
  </Svg>
);
export default IconlystGingerbreadBroken;
