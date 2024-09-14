import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteTrashTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.07 9.707-.798 9.73a2.7 2.7 0 0 1-2.69 2.48H9.417a2.7 2.7 0 0 1-2.691-2.48l-.797-9.73"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.27 21.93-5.828-6.106M6.664 9.723l10.74 11.484M18.065 9.724 7.454 21.07M6.443 15.832l6.085-6.127M12.785 21.93l5.783-6.106M18.568 15.832l-6.04-6.127"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.422 4.613.785 1.6h2.589c.795 0 1.44.646 1.44 1.441v2.053H4.765V7.654c0-.795.645-1.44 1.44-1.44h2.589l.785-1.601a1.5 1.5 0 0 1 1.347-.84h3.15a1.5 1.5 0 0 1 1.347.84"
    />
  </Svg>
);
export default IconlystDeleteTrashTwoTone;
