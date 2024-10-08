import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone4Outline = ({
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
      d="M16.205 17.624c-.44 0-.877-.09-1.281-.266a43 43 0 0 0-3.743-1.408 1 1 0 0 1-.121-.039 43 43 0 0 0-5.52-1.38 3.513 3.513 0 0 1-2.793-3.74v-1.1a3.507 3.507 0 0 1 2.8-3.73 43.3 43.3 0 0 0 9.4-2.806 2.94 2.94 0 0 1 2.822.226A4.17 4.17 0 0 1 19.4 6.996l-.01 7.465a3.15 3.15 0 0 1-1.422 2.636 3.2 3.2 0 0 1-1.763.527m-4.56-3.1c1.222.4 2.524.876 3.873 1.457a1.72 1.72 0 0 0 1.619-.136 1.63 1.63 0 0 0 .746-1.384l.01-7.465a2.74 2.74 0 0 0-.958-2.362 1.45 1.45 0 0 0-1.4-.1 44.7 44.7 0 0 1-9.727 2.9c-1.44.253-1.555 1.791-1.555 2.256v1.1c0 .465.11 2 1.556 2.261a44 44 0 0 1 5.715 1.43 1 1 0 0 1 .121.043"
    />
    <Path
      fill={props.color}
      d="M18.634 14.341a.75.75 0 0 1-.11-1.492 2.616 2.616 0 0 0 .006-5.172.75.75 0 1 1 .226-1.483 4.116 4.116 0 0 1-.01 8.14 1 1 0 0 1-.112.007M10.227 21.592A2.5 2.5 0 0 1 8.21 20.58a3.7 3.7 0 0 1-.56-1.147c-.35-1.113-.786-2.576-1.178-3.888l-.4-1.32a.75.75 0 0 1 1.436-.433l.4 1.323c.39 1.306.825 2.761 1.173 3.867.071.254.185.494.337.71a1.01 1.01 0 0 0 1.12.343.88.88 0 0 0 .548-.944c-.04-.556-.37-2.975-.48-3.77a.75.75 0 1 1 1.487-.2c.192 1.4.45 3.324.489 3.857a2.38 2.38 0 0 1-1.505 2.46c-.272.104-.56.156-.85.154M7.87 10.756a.75.75 0 0 1-.749-.75l.005-3.724a.749.749 0 1 1 1.5.002l-.006 3.723a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone4Outline;
