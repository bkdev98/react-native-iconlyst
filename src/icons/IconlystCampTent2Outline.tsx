import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCampTent2Outline = ({
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
      d="M12.317 6.562a.75.75 0 0 1 .555.25l5.13 5.755a.8.8 0 0 1 .136.22l3.184 7.913a.75.75 0 0 1-1.392.56l-3.135-7.793-4.49-5.036-4.6 5.041L4.57 21.26a.75.75 0 1 1-1.392-.56l3.184-7.913a.8.8 0 0 1 .142-.226l5.253-5.755a.75.75 0 0 1 .559-.244"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.899 2.395a.75.75 0 0 1 .704-.068l3.55 1.48a.75.75 0 0 1 0 1.385l-3.088 1.29v.826a.75.75 0 0 1-1.5 0V3.02a.75.75 0 0 1 .334-.625m1.166 2.461.852-.356-.852-.355zM2.5 20.978a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.994 12.32a.75.75 0 0 1 .811.683c.299 3.447.023 6.313-1.285 8.376a.75.75 0 0 1-1.267-.803c1.035-1.632 1.35-4.079 1.058-7.444a.75.75 0 0 1 .683-.812M17.507 12.32a.75.75 0 0 1 .683.811c-.292 3.366.022 5.812 1.057 7.445a.75.75 0 1 1-1.267.803c-1.308-2.064-1.583-4.929-1.285-8.377a.75.75 0 0 1 .812-.683M12.313 11.74a.75.75 0 0 1 .75.75v8.488a.75.75 0 1 1-1.5 0V12.49a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.304 12.602a.75.75 0 0 1 .75.75c0 1.929-1.098 3.989-2.088 5.478a23.5 23.5 0 0 1-1.988 2.569l-.036.04-.01.01-.003.003v.001c-.001 0-.001.001-.52-.483l.52.483a.75.75 0 0 1-1.099-1.021l.002-.002.006-.007.03-.032.117-.132A21.972 21.972 0 0 0 9.717 18c.972-1.46 1.837-3.197 1.837-4.647a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCampTent2Outline;
