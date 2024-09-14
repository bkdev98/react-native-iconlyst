import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpenReceiveOutline = ({
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
      d="M15.407 20.67H7.394a4.98 4.98 0 0 1-3.6-1.334 4.64 4.64 0 0 1-1.29-3.386v-5.282a3.45 3.45 0 0 1 .444-1.71c.26-.469.624-.873 1.062-1.183L9.58 3.9a3.15 3.15 0 0 1 3.627 0l2.39 1.656a.75.75 0 1 1-.857 1.233l-2.393-1.66a1.65 1.65 0 0 0-1.907 0L4.87 9.006c-.254.179-.463.413-.612.685a2 2 0 0 0-.255.978v5.282a3.19 3.19 0 0 0 .85 2.323 3.47 3.47 0 0 0 2.52.9h8.033a3.48 3.48 0 0 0 2.524-.9 3.2 3.2 0 0 0 .85-2.324v-1.53a.75.75 0 1 1 1.5 0v1.53a4.65 4.65 0 0 1-1.292 3.387 4.93 4.93 0 0 1-3.58 1.334"
    />
    <Path
      fill={props.color}
      d="M11.416 15.509a3.8 3.8 0 0 1-2.362-.825L3.132 9.91a.75.75 0 0 1 .941-1.168L9.99 13.51a2.3 2.3 0 0 0 2.856 0l.678-.55a.75.75 0 1 1 .944 1.167l-.684.552a3.8 3.8 0 0 1-2.367.829"
    />
    <Path
      fill={props.color}
      d="M16.938 15.464a5.059 5.059 0 1 1 .007-10.118 5.059 5.059 0 0 1-.007 10.118m0-8.621a3.562 3.562 0 1 0 2.52 1.044 3.54 3.54 0 0 0-2.52-1.044"
    />
    <Path
      fill={props.color}
      d="M18.46 11.868h-.01l-2.194-.04a.75.75 0 0 1-.736-.735l-.04-2.194a.75.75 0 0 1 .737-.764h.014a.75.75 0 0 1 .75.737l.026 1.47 1.47.026a.75.75 0 1 1-.013 1.5z"
    />
    <Path
      fill={props.color}
      d="M16.266 11.828a.749.749 0 0 1-.531-1.28l3.555-3.554a.75.75 0 0 1 1.061 1.06l-3.555 3.554a.75.75 0 0 1-.53.22"
    />
  </Svg>
);
export default IconlystEmailOpenReceiveOutline;
