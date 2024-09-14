import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSendOutline = ({
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
      d="M5.422 4.606c-.648.533-1.109 1.31-1.31 2.284a.75.75 0 1 1-1.47-.303c.263-1.272.885-2.365 1.827-3.14.944-.775 2.165-1.197 3.564-1.197h6.322c.865 0 1.69.353 2.287.975l4.474 4.661c.567.59.884 1.377.884 2.195v5.893c0 1.627-.509 3.078-1.487 4.128-.984 1.057-2.387 1.648-4.046 1.648H8.033c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.5-1.487-4.129a.75.75 0 1 1 1.5 0c0 1.319.409 2.381 1.085 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.948-1.17.676-.726 1.085-1.788 1.085-3.106V10.08c0-.431-.167-.845-.465-1.156L15.56 4.264a1.67 1.67 0 0 0-1.205-.514H8.033c-1.09 0-1.964.324-2.61.856"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.138 16.592c-.598 0-1.083.485-1.083 1.084V21a.75.75 0 0 1-1.5 0v-3.324a2.583 2.583 0 0 1 2.583-2.584h4.222a2.584 2.584 0 0 1 2.583 2.584V21a.75.75 0 1 1-1.5 0v-3.324c0-.6-.485-1.084-1.083-1.084zM8.305 2.25a.75.75 0 0 1 .75.75v2.657a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75M5.749 8.74a.75.75 0 0 1 0 1.06L4.31 11.238l1.438 1.438a.75.75 0 0 1-1.061 1.06L2.72 11.77a.75.75 0 0 1 0-1.061l1.968-1.969a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 11.238a.75.75 0 0 1 .75-.75h7.22a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFloppyDiskSendOutline;
