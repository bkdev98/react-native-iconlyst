import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDumbbells2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.792 14.1c.358.041.86.181 1.181.645.43.62.39 2.937.06 3.454-.21.364-.615.752-2.742.774-2.13.022-2.54-.357-2.759-.717-.34-.511-.427-2.827-.011-3.454.31-.471.811-.622 1.168-.67a.46.46 0 0 0 .393-.466l-.054-5.334a.46.46 0 0 0-.403-.459c-.358-.04-.861-.18-1.182-.645-.43-.618-.388-2.936-.059-3.454.21-.364.613-.75 2.742-.773 2.129-.022 2.54.357 2.758.717.34.51.428 2.826.011 3.455-.311.47-.81.62-1.167.67a.46.46 0 0 0-.394.464l.028 2.668M6.464 9.658c-.348-.095-.823-.31-1.07-.816-.33-.678.06-2.963.464-3.424.262-.328.72-.65 2.827-.35s2.457.737 2.618 1.127c.258.555-.005 2.858-.511 3.416-.38.418-.896.49-1.256.485a.46.46 0 0 0-.46.401l-.753 5.281a.463.463 0 0 0 .33.514c.348.094.822.31 1.07.816.33.677-.06 2.963-.464 3.424-.262.328-.72.65-2.828.35s-2.457-.738-2.617-1.126c-.259-.556.005-2.859.51-3.416.38-.419.897-.492 1.257-.486a.46.46 0 0 0 .459-.4l.376-2.642"
    />
  </Svg>
);
export default IconlystDumbbells2Broken;
