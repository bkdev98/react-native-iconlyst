import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag4Outline = ({
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
      d="M3.724 6.893c.814-.872 1.969-1.356 3.32-1.356h10.41c1.355 0 2.51.483 3.324 1.357C21.586 7.76 22 8.952 22 10.275v6.307c0 1.324-.414 2.515-1.222 3.382-.813.873-1.97 1.356-3.325 1.356H7.045c-1.355 0-2.51-.483-3.324-1.356-.807-.868-1.221-2.058-1.221-3.382v-6.307c0-1.324.416-2.515 1.224-3.382m1.097 1.023C4.315 8.46 4 9.263 4 10.276v6.306c0 1.014.314 1.817.82 2.36.499.536 1.24.878 2.225.878h10.409c.984 0 1.727-.342 2.226-.879.506-.542.82-1.345.82-2.359v-6.307c0-1.013-.314-1.816-.82-2.359-.5-.537-1.241-.879-2.226-.879H7.044c-.98 0-1.722.342-2.223.88"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.77 10.014a.75.75 0 0 1 .75.75v5.87a.75.75 0 0 1-1.5 0v-5.87a.75.75 0 0 1 .75-.75M12.25 10.014a.75.75 0 0 1 .75.75v5.87a.75.75 0 0 1-1.5 0v-5.87a.75.75 0 0 1 .75-.75M16.73 10.014a.75.75 0 0 1 .75.75v5.87a.75.75 0 0 1-1.5 0v-5.87a.75.75 0 0 1 .75-.75M8.14 5.649a2.97 2.97 0 0 1 2.97-2.97h2.28a2.97 2.97 0 0 1 2.97 2.97v.638a.75.75 0 0 1-1.5 0V5.65a1.47 1.47 0 0 0-1.47-1.47h-2.28c-.812 0-1.47.658-1.47 1.47v.638a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag4Outline;
