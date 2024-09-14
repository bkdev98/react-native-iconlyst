import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDisasterOutline = ({
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
      d="M5.494 9.496c.12-.5.518-.972 1.253-1.375.745-.409 1.752-.696 2.882-.84 2.283-.293 4.817.023 6.3.802a.75.75 0 1 0 .698-1.328c-1.845-.969-4.718-1.28-7.188-.963-1.246.16-2.452.486-3.414 1.014-.959.527-1.761 1.305-2.002 2.393l-.01.052c-.175 1.184.478 2.145 1.37 2.796s2.12 1.08 3.432 1.265c.906.127 1.852.173 2.787.154a.75.75 0 0 0-.03-1.5c-.869.018-1.734-.025-2.548-.14-1.147-.16-2.12-.526-2.756-.99-.622-.454-.827-.915-.774-1.34"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.656 12.141a.75.75 0 0 1-.451.96c-.817.296-1.24.696-1.375 1.114-.052.283.057.628.519 1.016.477.401 1.237.75 2.159.945 1.22.258 2.594.323 3.867.245a.75.75 0 0 1 .092 1.497c-1.378.085-2.89.017-4.27-.274-1.085-.23-2.094-.66-2.813-1.264-.72-.605-1.24-1.48-1.015-2.51l.014-.052c.321-1.094 1.282-1.755 2.312-2.127a.75.75 0 0 1 .96.45"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.67 16.69a.75.75 0 0 1-.39.986c-.57.248-.879.579-.985.952-.046.274.047.568.359.875.329.324.863.61 1.524.767a.75.75 0 1 1-.346 1.46c-.859-.204-1.661-.597-2.23-1.158-.58-.57-.95-1.357-.775-2.255l.01-.044c.255-.978 1.006-1.608 1.846-1.973a.75.75 0 0 1 .986.39M18.107 11.335l-.673 2.354a1.01 1.01 0 0 0 .971 1.287h1.93l-1.524 2.396v-.805a1.01 1.01 0 0 0-1.01-1.01h-1.195l-.767-4.222zm1.62-.212a1.01 1.01 0 0 0-.97-1.288H15.25c-.63 0-1.106.571-.993 1.191l.945 5.201c.088.48.506.83.994.83h1.114v1.998c0 1.01 1.32 1.395 1.862.542l2.907-4.568-.633-.403.633.403a1.01 1.01 0 0 0-.852-1.553h-2.173zM15.566 18.684a.75.75 0 0 1 .43.97l-.61 1.578a.75.75 0 1 1-1.4-.54l.61-1.578a.75.75 0 0 1 .97-.43M11.693 3.75c-3.318 0-6.08.988-7.43 2.3a.75.75 0 1 1-1.045-1.077C4.952 3.29 8.158 2.25 11.693 2.25c2.603 0 4.996.562 6.766 1.506 1.739.928 3.054 2.337 3.054 4.086a.75.75 0 0 1-1.5 0c0-.926-.715-1.938-2.26-2.762-1.512-.808-3.654-1.33-6.06-1.33"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDisasterOutline;