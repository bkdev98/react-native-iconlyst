import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrashTruckBold = ({
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
      d="M4.74 9.408a.749.749 0 1 1 1.5 0v3.474a.3.3 0 0 0 .216.288l1.37.397a.3.3 0 0 0 .384-.289v-4.58c0-.42.33-.75.75-.75.41 0 .75.33.75.75v5.184a.3.3 0 0 0 .217.288l.823.238a1.526 1.526 0 0 0 .65.01c.21-.04.41-.14.59-.28.17-.13.31-.31.4-.5.1-.2.14-.41.14-.63v-.153l.036-7.666a.3.3 0 0 1 .3-.298h2.772a.75.75 0 0 0 0-1.5h-3.081c-.41.006-.793.169-1.083.462-.167.17-.284.375-.358.595H2.92c-.38.01-.74.16-1.01.44-.26.27-.41.63-.41 1.01v4.77c.01.33.12.63.31.87.2.26.48.44.76.51l1.786.518a.3.3 0 0 0 .384-.288z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.18 11.198a.2.2 0 0 1-.2-.201L15 7.387a.2.2 0 0 1 .2-.2h2.39c.17 0 .34.04.49.12s.28.19.38.33l2.235 3.247a.2.2 0 0 1-.165.314zm2.67 7.91c-.02 0-.04 0-.06-.01-.05.01-.09 0-.13-.01-.06-.01-.12-.03-.18-.05-.49-.15-.84-.61-.84-1.15 0-.67.54-1.21 1.21-1.21s1.21.54 1.21 1.21-.54 1.22-1.21 1.22m-8.84-.24a.4.4 0 0 1-.1.07q-.18.105-.39.15c-.07.01-.14.02-.22.02-.67 0-1.21-.55-1.21-1.22s.54-1.21 1.21-1.21 1.21.54 1.21 1.21c0 .4-.2.77-.5.98m13.54-7.93-2.86-4.16c-.23-.33-.55-.61-.91-.8-.37-.19-.78-.29-1.19-.29H15c-.41 0-.79.16-1.08.45-.3.29-.46.67-.46 1.08v5.69c-.01.1-.01.22-.01.36 0 2.53-2.07 2.22-2.56 2.11l-.09-.02c-.01-.01-.02-.01-.02-.01v.01l-1.45-.41-1.02-.29-2.63-.74-.74-.21-.94-.27a.74.74 0 0 0-.66.12c-.19.14-.3.36-.3.6v2.87c.01.44.18.84.48 1.15.31.3.71.47 1.15.48h1.17c.16.56.47 1.04.91 1.39.46.36 1.02.56 1.6.56.57 0 1.14-.2 1.59-.56s.78-.87.92-1.41c0-.01.01-.02.01-.03h4.44v.01c.15.56.48 1.07.93 1.43s1.02.56 1.59.56a2.596 2.596 0 0 0 2.5-1.93c.69-.03 1.34-.32 1.84-.82.54-.53.83-1.25.83-2v-3.43a2.52 2.52 0 0 0-.45-1.49"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrashTruckBold;
