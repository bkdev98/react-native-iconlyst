import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryRefreshBold = ({
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
      d="M12.11 8.725a.75.75 0 0 1 .466 0l1.848.6-.012-6.802a.3.3 0 0 0-.3-.299l-3.575.008a.3.3 0 0 0-.3.3l.008 6.808z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.79 18.06a.35.35 0 0 0-.01-.388 2 2 0 0 1-.13-.2c-.04-.06-.08-.12-.11-.19-.17-.33-.27-.72-.27-1.12v-1.85a2.5 2.5 0 0 1 2.5-2.5q.56 0 1.04.237a.34.34 0 0 0 .249.021 5.7 5.7 0 0 1 1.71-.257c.928 0 1.801.22 2.58.607.21.105.47-.041.47-.277l-.01-4.42c0-1.64-.55-3.08-1.54-4.07-.95-.94-2.23-1.43-3.72-1.43h-.339a.3.3 0 0 0-.3.3l.02 7.83c0 .24-.12.47-.31.61-.2.14-.45.18-.68.11l-2.59-.85-2.62.87a.71.71 0 0 1-.67-.11.72.72 0 0 1-.31-.6l-.01-7.846a.3.3 0 0 0-.305-.3l-.335.006c-1.58.01-2.9.56-3.82 1.53s-1.45 2.35-1.45 4l.02 7.94c.01 1.59.5 2.95 1.43 3.95.95 1.02 2.28 1.56 3.84 1.56h.02l5.355-.01c.25 0 .395-.296.265-.51a2.52 2.52 0 0 1 .03-2.642"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.768 13.567c-.825 0-1.603.249-2.261.686a.744.744 0 0 0-1.487.064v1.85c0 .049.019.093.028.14.008.039.01.077.023.114.02.057.054.105.087.155.02.03.036.063.06.09a.7.7 0 0 0 .15.117c.024.016.04.04.067.053.006.003.013.002.019.005.05.024.105.032.16.044.045.01.088.025.132.027.009 0 .016.005.024.005h1.856a.75.75 0 0 0 0-1.5h-.14c.384-.22.82-.35 1.282-.35a2.604 2.604 0 0 1 0 5.21 2.59 2.59 0 0 1-2.228-1.26.75.75 0 1 0-1.283.779 4.08 4.08 0 0 0 3.51 1.98 4.105 4.105 0 0 0 4.103-4.1 4.11 4.11 0 0 0-4.102-4.11"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryRefreshBold;
