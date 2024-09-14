import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillEditTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.113 20.424a2.604 2.604 0 0 0 2.604-2.604V9.583m.001 0V5.276c0-.821.794-1.369 1.483-1.016l.653.345c.388.203.839.212 1.245.035l1.845-.82a2.9 2.9 0 0 1 2.33 0l1.845.82a1.43 1.43 0 0 0 1.246-.035l.652-.345c.69-.353 1.483.186 1.483 1.016l-.008 5.175"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.113 20.424c-.724 0-1.376-.29-1.844-.759a2.6 2.6 0 0 1-.769-1.844v-7.248c0-.831.795-1.37 1.484-1.016l.653.344c.388.204.838.213 1.244.036l1.245-.556c.097-.045.344.07.592.202"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.951 20.424H6.113"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.684 13.288h2.391m-2.391-4.13h4.684"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.067 20.277-.803.134a.9.9 0 0 1-1.042-.983l.09-.828c.043-.4.21-.776.478-1.075l3.06-3.38a1.1 1.1 0 0 1 1.557-.06l.739.682c.446.414.473 1.111.059 1.558l-3.021 3.336a1.92 1.92 0 0 1-1.117.616"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillEditTwoTone;
