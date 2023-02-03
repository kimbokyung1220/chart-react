interface headerProps{
    headerTitle: string
}

const ContentHeaderComponent = ({headerTitle}: headerProps) => {
    return (
    <>
        <h2 className="fz-24 fw-smbold fc-10">{headerTitle}</h2>
    </>
    );
}

export default ContentHeaderComponent;