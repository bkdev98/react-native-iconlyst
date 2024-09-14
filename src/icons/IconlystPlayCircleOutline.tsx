import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayCircleOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.384 4.365-9.75 9.75-9.75S22 6.616 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.516 11.182c.12.156.327.453.327.818 0 .363-.204.66-.323.815a4.3 4.3 0 0 1-.543.569c-.412.369-.95.762-1.49 1.107-.54.344-1.114.66-1.603.86-.24.1-.495.185-.734.222-.119.018-.266.03-.42.007a.97.97 0 0 1-.55-.265 1.2 1.2 0 0 1-.246-.371 2 2 0 0 1-.112-.336 6 6 0 0 1-.13-.755c-.062-.548-.09-1.219-.086-1.876a17 17 0 0 1 .099-1.865 6 6 0 0 1 .127-.738c.027-.107.06-.22.106-.326.04-.094.112-.242.242-.37a.95.95 0 0 1 .566-.262c.15-.017.294-.003.408.018.23.04.479.127.716.226.483.202 1.056.514 1.598.856s1.083.732 1.499 1.098c.205.182.4.375.549.568m-4.285-1.163.06.025a10 10 0 0 1 1.376.74c.498.315.97.657 1.307.955q.17.151.272.263a4 4 0 0 1-.27.265c-.335.3-.802.644-1.296.96a9.3 9.3 0 0 1-1.366.737l-.088.035a6 6 0 0 1-.043-.315 15 15 0 0 1-.077-1.7c.002-.62.033-1.227.088-1.697a7 7 0 0 1 .037-.268m-.328 4.074h.002Zm.406.25.002.005zm3.067-2.175-.005-.009zm-.005-.326.004-.008zm-3.053-2.207v-.001q.006-.01 0 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayCircleOutline;
