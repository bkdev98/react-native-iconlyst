import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapMoveBulk = ({
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
      d="M11.346 10.259 11.28 6.05a1.626 1.626 0 0 0-3.253.026v9.33L6.863 13.72a1.78 1.78 0 0 0-2.1-.653c-.866.333-1.331 1.274-1.015 2.146.59 1.627 1.524 3.44 2.727 4.937 1.896 2.356 7.683 2.2 9.755.127 1.624-1.623 2.535-4.932 1.609-7.433-.92-2.484-4.217-2.367-6.493-2.584"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.351 5.989c0-.019-.01-.037-.01-.056a.8.8 0 0 0-.05-.244.8.8 0 0 0-.178-.264l-.872-.872a.79.79 0 0 0-1.117 0 .78.78 0 0 0-.215.645h-.634v-.632c.03.003.06.017.089.017a.791.791 0 0 0 .56-1.348l-.88-.88a.789.789 0 0 0-1.118 0l-.878.88a.79.79 0 0 0 0 1.116.77.77 0 0 0 .647.215v.632h-.632a.78.78 0 0 0-.214-.645.79.79 0 0 0-1.118 0l-.872.872a.8.8 0 0 0-.177.264.8.8 0 0 0-.05.244c0 .02-.01.036-.01.055 0 .103.02.208.061.304.02.046.053.08.08.12.029.046.05.096.09.136l.878.879a.786.786 0 0 0 1.118 0 .78.78 0 0 0 .214-.649h.632v.634a.77.77 0 0 0-.647.215.79.79 0 0 0 0 1.117l.879.878a.8.8 0 0 0 .86.171.8.8 0 0 0 .258-.17l.878-.88a.79.79 0 0 0 0-1.116.78.78 0 0 0-.648-.215v-.634h.635a.774.774 0 0 0 .773.88.78.78 0 0 0 .558-.231l.878-.879c.042-.04.062-.09.092-.137.027-.04.06-.073.08-.119.04-.096.06-.2.06-.303"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapMoveBulk;
