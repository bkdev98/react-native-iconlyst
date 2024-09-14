import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneCloseRemoveBulk = ({
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
      d="M19.776 10.099a.75.75 0 0 0-.749.75c.008 3.57-2.889 6.48-6.453 6.49h-.007a6.43 6.43 0 0 1-4.569-1.907 6.43 6.43 0 0 1-1.885-4.581.75.75 0 0 0-.748-.752h-.002a.75.75 0 0 0-.75.748 7.92 7.92 0 0 0 2.322 5.644 7.9 7.9 0 0 0 4.885 2.31v2.136a.75.75 0 0 0 1.5 0V18.8c4.045-.388 7.216-3.81 7.207-7.952a.75.75 0 0 0-.75-.75"
    />
    <Path
      fill={props.color}
      d="M12.568 14.994h.004a4.17 4.17 0 0 0 4.157-4.175V9.036a.43.43 0 0 0-.37-.414c-2.17-.334-3.836-2.19-3.836-4.452 0-.5.085-.98.236-1.43.046-.137-.045-.303-.19-.303a4.164 4.164 0 0 0-4.16 4.159v4.222a4.14 4.14 0 0 0 1.214 2.949 4.14 4.14 0 0 0 2.945 1.226"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.116 6.53a.75.75 0 0 1-.53-1.281l.828-.828-.827-.828a.749.749 0 1 1 1.061-1.06l.827.827.827-.827a.749.749 0 1 1 1.06 1.06l-.827.828.827.827a.75.75 0 0 1-1.06 1.06l-.827-.826-.828.828a.75.75 0 0 1-.53.22"
    />
  </Svg>
);
export default IconlystMicrophoneCloseRemoveBulk;
