import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSphereGlobDashBulk = ({
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
      d="M19.896 9.747C18.86 6.373 15.716 3.9 12 3.9c-3.715 0-6.861 2.474-7.896 5.847a.75.75 0 0 0-.551.15c-.73.56-1.292 1.31-1.303 2.226C2.265 6.766 6.629 2.4 12 2.4s9.735 4.366 9.75 9.724a2 2 0 0 0-.026-.314c-.118-.774-.632-1.418-1.276-1.913a.75.75 0 0 0-.552-.15"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m6.931 9.954-.057.017a.75.75 0 0 1-.424-1.439 18 18 0 0 1 3.355-.627q.258-.026.522-.045a.75.75 0 1 1 .108 1.496l-.068.006-.018.001q-.202.015-.4.035a16.7 16.7 0 0 0-2.994.55l-.01.003zM12.871 8.554a.75.75 0 0 1 .803-.694q.263.02.521.045c1.22.117 2.357.332 3.355.627a.75.75 0 0 1-.424 1.439l-.057-.017-.024-.006a16.7 16.7 0 0 0-2.994-.55l-.4-.035-.018-.001-.068-.006a.75.75 0 0 1-.694-.802"
    />
    <Path
      fill={props.color}
      d="M2.259 12.215c0-.896.384-1.697 1.072-2.24.203-.2.561-.457 1.041-.2.296.236.464.79-.108 1.407-.63.68-.602 1.18.105 1.84 1.66 1.551 6.875 2.324 10.92 1.619 2.869-.5 4.92-1.565 4.92-2.553 0-.215-.215-.623-.477-.906-.608-.656-.385-1.174-.07-1.381.383-.254.738-.112 1.044.174 1.078 1.007 1.296 2.324.738 4.463-1.35 5.185-6.724 8.397-11.825 7.068-4.213-1.098-7.36-5.07-7.36-9.291"
    />
  </Svg>
);
export default IconlystSphereGlobDashBulk;
