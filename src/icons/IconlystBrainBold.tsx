import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBrainBold = ({
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
      d="m18.797 11.164-1.294.28a.752.752 0 0 1-.893-.574.753.753 0 0 1 .575-.893l1.294-.28a.755.755 0 0 1 .892.574.75.75 0 0 1-.574.893m-2.114 4.556-.033.001a.75.75 0 0 1-.749-.718c-.054-1.256-.807-1.72-1.43-1.887-.887-.238-1.794.05-2.055.46a.75.75 0 0 1-1.264-.808c.57-.892 1.862-1.362 3.15-1.208.341-1.117-.22-1.727-.423-1.902a.751.751 0 0 1 .982-1.135c.752.652 1.357 1.92.863 3.51 1.006.577 1.62 1.606 1.676 2.905a.75.75 0 0 1-.717.782M9.447 9.612c-.044.015-.084.035-.13.048a3 3 0 0 1-.776.106c-.797 0-1.544-.327-1.878-.874a.75.75 0 0 1 1.275-.79c.107.111.612.258 1.073.081.425-.163.631-.537.631-1.142a.75.75 0 0 1 1.5 0c0 .656-.17 1.227-.48 1.675.19.222.5.453.938.337.395-.1.81.141.911.544a.75.75 0 0 1-.544.911q-.313.077-.605.076c-.805 0-1.473-.42-1.915-.972m12.803 1.606c.015-1.01-.436-2.03-1.309-2.956-.497-1.296-1.332-2.166-2.408-2.587-.032-.1-.044-.2-.088-.299-.495-1.115-1.64-1.907-2.918-2.017a3.45 3.45 0 0 0-1.65.27c-3.285-1.038-5.855.433-7.139 1.197a3.92 3.92 0 0 0-2.377.79c-1.07.808-1.714 2.14-1.707 3.413-.024.026-.054.044-.075.074-.736 1.1-.994 2.372-.727 3.584a4.1 4.1 0 0 0 1.595 2.433c1.028.41 2.3.268 2.932-.178.84-.6 1.23-1.605 1.168-2.243a.75.75 0 0 1 .674-.818c.408-.053.778.261.818.674.122 1.251-.58 2.691-1.71 3.544.306.525.767.944 1.37 1.184a3.36 3.36 0 0 0 2.796-.155 2.77 2.77 0 0 0 2.094.795l.967 2.286c.114.285.46.521.766.521h1.688a.83.83 0 0 0 .827-.83v-1.037c3.151-.41 3.866-2.14 4.028-2.903.184-.866-.034-1.793-.512-2.434.584-.728.885-1.502.897-2.308"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBrainBold;
