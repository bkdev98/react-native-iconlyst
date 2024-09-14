import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoteShieldBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.469 18.035c0-.693-.01-1.166-.016-1.494-.018-.904-.032-1.618.726-2.372.702-.732 3.38-1.523 4.045-1.523.314 0 1.078.18 1.874.448a.307.307 0 0 0 .407-.287v-5.49a4.626 4.626 0 0 0-4.62-4.622H7.788a4.625 4.625 0 0 0-4.619 4.621v9.76a4.624 4.624 0 0 0 4.619 4.62h5.608c.277 0 .416-.354.236-.563-.677-.789-1.163-1.813-1.163-3.098"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M7.659 8.273h5.082a.75.75 0 1 1 0 1.5H7.659a.75.75 0 0 1 0-1.5M10.31 14.212H7.658a.75.75 0 0 1 0-1.5h2.654a.75.75 0 0 1 0 1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.304 13.93c.467 0 2.749.727 3.176 1.17.367.367.362.64.346 1.453-.007.333-.016.813-.016 1.517 0 2.825-3.155 3.809-3.29 3.849a.75.75 0 0 1-.432 0c-.135-.04-3.29-1.024-3.29-3.85 0-.645-.008-1.103-.014-1.432l-.001-.086c-.017-.811-.022-1.085.357-1.462.416-.432 2.697-1.16 3.164-1.16m2.02 2.685.002-.091.004-.206q.003-.117.004-.196c-.416-.197-1.75-.66-2.062-.693-.25.034-1.53.479-1.998.7q0 .089.005.226 0 .075.004.167l.001.09c.006.335.015.8.015 1.458 0 1.383 1.444 2.104 2.005 2.332.56-.228 2.006-.95 2.006-2.332 0-.656.008-1.12.014-1.455"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNoteShieldBulk;
